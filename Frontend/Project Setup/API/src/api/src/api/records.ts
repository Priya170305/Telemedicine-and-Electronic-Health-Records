import { apiClient } from "../../client.ts";
import type { MedicalRecord } from "@/types";

export async function getPatientRecords(patientId: string): Promise<MedicalRecord[]> {
  const { data } = await apiClient.get<MedicalRecord[]>(`/records/patient/${patientId}`);
  return data;
}

export async function createRecord(payload: {
  patientId: string;
  diagnosis: string;
  notes: string;
  vitals?: MedicalRecord["vitals"];
}): Promise<MedicalRecord> {
  const { data } = await apiClient.post<MedicalRecord>("/records", payload);
  return data;
}