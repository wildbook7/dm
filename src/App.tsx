import { useState } from "react"

const HABITS = [
	"Be proactive",
	"Begin with the end in mind",
	"Put first things first",
	"Think win-win",
	"Seek first to understand, then to be understood",
	"Synergize",
	"Sharpen the saw",
]

function App() {
	const [input, setInput] = useState("1. \n2. \n3. \n4. \n5. \n6. \n7. \n")
	const [result, setResult] = useState<string | null>(null)

	const handleCheck = () => {
		const userHabits = input
			.split("\n")
			.map((line) => line.trim())
			.map((line) => line.replace(/^\d+\.\s*/, ""))
			.filter((line) => line.length > 0)

		const isCorrect =
			userHabits.length === HABITS.length &&
			userHabits.every((habit, index) => habit === HABITS[index])

		if (isCorrect) {
			setResult("✓ Correct! You remember all 7 Habits!")
		} else {
			setResult("✗ Incorrect. Please try again.")
		}
	}

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="max-w-2xl mx-auto">
				<h1 className="text-4xl font-bold mb-2">The 7 Habits</h1>
				<p className="text-gray-600 mb-8">
					Can you remember all 7 Habits? Type them below (one per line).
				</p>

				<textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="1. Be proactive&#10;2. Begin with the end in mind&#10;..."
					className="w-full h-80 p-4 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-blue-500"
				/>

				<button
					onClick={handleCheck}
					className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
				>
					Check
				</button>

				{result && (
					<div
						className={`mt-6 p-4 rounded-lg font-semibold text-lg ${
							result.includes("✓")
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{result}
					</div>
				)}

				{result && (
					<div className="mt-8 bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-bold mb-4">The Correct Answers:</h2>
						<ol className="space-y-2">
							{HABITS.map((habit, index) => (
								<li key={index} className="text-gray-700">
									<span className="font-semibold">{index + 1}.</span> {habit}
								</li>
							))}
						</ol>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
