export type UserRole = "patient" | "doctor" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  // Doctor-only
  specialty?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed";

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  startTime: string; // ISO string
  durationMinutes: number;
  status: AppointmentStatus;
  reason: string;
  roomId?: string; // populated once a teleconsultation room is created
}

export interface VitalSigns {
  recordedAt: string;
  bloodPressure?: string;
  heartRateBpm?: number;
  temperatureC?: number;
  weightKg?: number;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  diagnosis: string;
  notes: string;
  vitals?: VitalSigns;
  createdBy: string; // doctor id
  createdAt: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  medication: string;
  dosage: string;
  instructions: string;
  issuedAt: string;
  verificationHash?: string; // returned by backend for the "verifiable prescription" requirement
}

export interface AuditLogEntry {
  id: string;
  actorId: string;
  actorName: string;
  action: string;
  resource: string;
  timestamp: string;
}