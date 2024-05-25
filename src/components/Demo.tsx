import Section from "./Section";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Demo() {
    return (
        <Section>
            <ul className="flex flex-wrap gap-6 justify-center">
                {numbers.map((item, idx) => <li key={idx} className="min-h-[3rem] min-w-[5rem] flex justify-center items-center bg-success-500 rounded text-xl text-stone-900">{item}</li>)}
            </ul>
        </Section>
    )
}
