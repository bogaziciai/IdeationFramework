export type Rate = "low" | "mid" | "high";

export function rateToEmoji(rate: Rate, invert: boolean = false) {
  if (invert) {
    switch (rate) {
      case "high":
        return "🔴";
      case "mid":
        return "🟡";
      case "low":
        return "🟢";
      default:
        return "";
    }
  }
  switch (rate) {
    case "high":
      return "🟢";
    case "mid":
      return "🟡";
    case "low":
      return "🔴";
    default:
      return "";
  }
}
