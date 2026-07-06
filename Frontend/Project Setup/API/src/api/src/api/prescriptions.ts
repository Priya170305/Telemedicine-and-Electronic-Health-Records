import { apiClient } from "./client";
import type { Prescription } from "@/types";

export async function getPatientPrescriptions(
  patientId: string
): Promise<Prescription[]> {
  const { data } = await apiClient.get<Prescription[]>(
    `/prescriptions/patient/${patientId}`
  );
  return data;
}

export async function issuePrescription(payload: {
  patientId: string;
  medication: string;
  dosage: string;
  instructions: string;
}): Promise<Prescription> {
  const { data } = await apiClient.post<Prescription>("/prescriptions", payload);
  return data;
}