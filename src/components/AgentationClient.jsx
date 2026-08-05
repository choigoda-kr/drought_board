import { Agentation } from "agentation";

export default function AgentationClient() {
  // Vite 환경에서 개발(dev) 모드일 때만 노출
  if (!import.meta.env.DEV) return null;

  return <Agentation />;
}
