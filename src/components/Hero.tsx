import { TypewriterEffectSmooth } from "../aceternity-ui/TypewriterEffect";
import Section from "./Section";


const second_heading_words = [
    { text: 'Taking' },
    { text: 'your' },
    { text: 'academic' },
    { text: 'plans' },
    { text: 'to' },
    { text: 'the' },
    { text: 'next' },
    { text: 'level.', className: 'text-blue-600 font-bold' },
]

export default function Hero() {
    return (
        <Section>
            <div className="flex flex-col space-y-5 md:space-y-7" >
                <h1>One Academy</h1>
                <TypewriterEffectSmooth words={second_heading_words} />
            </div>
        </Section>
    )
}
