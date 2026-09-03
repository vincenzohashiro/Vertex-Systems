import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  type DocumentData,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { activity as mockActivity } from '../data/activity'
import { appointments as mockAppointments } from '../data/appointments'
import { customers as mockCustomers } from '../data/customers'
import { leads as mockLeads } from '../data/leads'
import { notes as mockNotes } from '../data/notes'
import { tasks as mockTasks } from '../data/tasks'
import type { ActivityItem, Appointment, Customer, Lead, Note, Task } from '../data/types'
import { db } from './firebase'

const firebaseConfigured = Boolean(import.meta.env.VITE_FIREBASE_PROJECT_ID)

// Generic live-collection hook backing every CRM list in the app.
//
// PLACEHOLDER MODE: until a real Firebase project is wired up (see
// .env.example), this returns the local mock data untouched so the demo
// keeps working with zero setup. Once VITE_FIREBASE_PROJECT_ID is set,
// it switches to a live Firestore onSnapshot listener automatically.
function useLiveCollection<T extends { id: string }>(
  name: string,
  orderField: string,
  fallback: T[],
  max?: number,
) {
  const [data, setData] = useState<T[]>(fallback)
  const [loading, setLoading] = useState(firebaseConfigured)
  const [error, setError] = useState<string | null>(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    if (!firebaseConfigured) return

    const constraints = [orderBy(orderField, 'desc')]
    const q = max
      ? query(collection(db, name), ...constraints, limit(max))
      : query(collection(db, name), ...constraints)

    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        setData(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as T[])
        setLive(true)
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
    )
    return unsubscribe
  }, [name, orderField, max])

  return { data, loading, error, live }
}

function collectionApi<T extends { id: string }>(name: string) {
  return {
    add: (data: Omit<T, 'id'>) =>
      addDoc(collection(db, name), { ...data, createdAt: new Date().toISOString() } as DocumentData),
    update: (id: string, data: Partial<Omit<T, 'id'>>) =>
      updateDoc(doc(db, name, id), { ...data, updatedAt: new Date().toISOString() } as DocumentData),
    remove: (id: string) => deleteDoc(doc(db, name, id)),
  }
}

export const useLeads = () => useLiveCollection<Lead>('leads', 'createdAt', mockLeads)
export const leadsApi = collectionApi<Lead>('leads')

export const useCustomers = () => useLiveCollection<Customer>('customers', 'since', mockCustomers)
export const customersApi = collectionApi<Customer>('customers')

export const useAppointments = () => useLiveCollection<Appointment>('appointments', 'date', mockAppointments)
export const appointmentsApi = collectionApi<Appointment>('appointments')

export const useTasks = () => useLiveCollection<Task>('tasks', 'dueDate', mockTasks)
export const tasksApi = collectionApi<Task>('tasks')

export const useNotes = () => useLiveCollection<Note>('notes', 'createdAt', mockNotes)
export const notesApi = collectionApi<Note>('notes')

export const useActivity = (max = 50) => useLiveCollection<ActivityItem>('activity', 'timestamp', mockActivity, max)
export const activityApi = collectionApi<ActivityItem>('activity')

export const isBackendConfigured = firebaseConfigured
