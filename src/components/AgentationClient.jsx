import { Agentation } from "agentation";

export default function AgentationClient() {
  if (!import.meta.env.DEV) return null;

  return <Agentation />;
}
