import { apiClient } from "../../client.ts";
import type { Appointment } from "@/types";

export async function getMyAppointments(): Promise<Appointment[]> {
  const { data } = await apiClient.get<Appointment[]>("/appointments/me");
  return data;
}

export async function bookAppointment(payload: {
  doctorId: string;
  startTime: string;
  durationMinutes: number;
  reason: string;
}): Promise<Appointment> {
  const { data } = await apiClient.post<Appointment>("/appointments", payload);
  return data;
}

export async function updateAppointmentStatus(
  id: string,
  status: Appointment["status"]
): Promise<Appointment> {
  const { data } = await apiClient.patch<Appointment>(`/appointments/${id}`, {
    status,
  });
  return data;
}

export async function getAvailableDoctors(): Promise<{ id: string; name: string; specialty: string }[]> {
  const { data } = await apiClient.get("/doctors");
  return data;
}