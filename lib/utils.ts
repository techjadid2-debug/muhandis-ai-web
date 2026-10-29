export { cn } from "cn"

/** Server va brauzerda bir xil natija beradigan raqam formati: 1240 → "1 240" */
export function formatNumber(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
