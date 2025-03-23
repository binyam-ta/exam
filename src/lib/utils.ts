import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single className string
 * Uses clsx for conditional classes and tailwind-merge to handle Tailwind CSS class conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Maps a color name to the corresponding Tailwind CSS color class
 * This helps with dynamic color classes that can't be directly used with string interpolation
 * @param color - The color name (e.g., 'blue', 'green', 'red')
 * @param type - The type of color class (e.g., 'bg', 'text', 'border')
 * @param shade - The color shade (e.g., '100', '500', '900')
 * @param darkMode - Whether to include dark mode variant
 * @returns The corresponding Tailwind CSS class
 */
export function getColorClass(
  color: string,
  type: 'bg' | 'text' | 'border' = 'bg',
  shade: string = '500',
  darkMode: boolean = false
): string {
  const baseClass = `${type}-${color}-${shade}`;
  
  if (!darkMode) {
    return baseClass;
  }
  
  const darkClass = `dark:${type}-${color}-${shade}`;
  return `${baseClass} ${darkClass}`;
}

/**
 * Maps a performance level to a color
 * @param percentage - The performance percentage (0-100)
 * @returns The corresponding color name
 */
export function getPerformanceColor(percentage: number): string {
  if (percentage >= 90) return 'green';
  if (percentage >= 80) return 'blue';
  if (percentage >= 70) return 'teal';
  if (percentage >= 60) return 'yellow';
  return 'red';
}

/**
 * Formats a date string to a localized date format
 * @param dateString - The date string to format
 * @returns The formatted date string
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString();
}

/**
 * Calculates the percentage from a score and maximum score
 * @param score - The actual score
 * @param maxScore - The maximum possible score
 * @returns The percentage (0-100)
 */
export function calculatePercentage(score: number, maxScore: number): number {
  return Math.round((score / maxScore) * 100);
}
