import type { Metadata } from "next";
import { PageHeader } from "@/components/app/page-header";
import { QuizRunner } from "@/components/app/quiz-runner";
import { quiz, topicScores } from "@/lib/mock-data";

export const metadata: Metadata = { title: "AI-testlar" };

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="AI-testlar" subtitle="Darajangga mos savollar va kuchsiz mavzularingni aniqlovchi tahlil." />
      <QuizRunner topic={quiz.topic} questions={quiz.questions} scores={topicScores} />
    </div>
  );
}
