import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultValuesAuthForm = {
  name: '',
  semestre: '',
  email: '',
  password: '',
  newPassword: '',
}

export const defaultValuesUploadForm = {
  title: '',
  date: '',
  content: '',
  materia: '',
}
