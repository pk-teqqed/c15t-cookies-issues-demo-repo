import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function subtractTwentyPercent(amount: number) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    throw new Error("Invalid input: amount must be a valid number.");
  }
  // Subtract 20% of the amount
  const updatedAmount = amount * 0.8; // Multiply by 0.8 to reduce by 20%
  return updatedAmount;
}

export function addAndPreserveOriginal(amount : number) {
  if (typeof amount !== 'number' || isNaN(amount)) {
      throw new Error("Invalid input: amount must be a valid number.");
  }
  // Calculate the amount with 20% added
  const updatedAmount = amount / 0.8; // Divide by 0.8 to ensure reverse subtraction works
  return updatedAmount;
}