//@ts-nocheck

import { motion } from "framer-motion";

// local
import { cn } from "../utils";


// interface TypeWriterProps{
    
// }

export const TypewriterEffectSmooth = ({ words, className, cursorClassName, }: { words: { text: string; className?: string; }[]; className?: string; cursorClassName?: string; }) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black `, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{ width: "0%" }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 2, ease: "linear", delay: 1 }}
            >
                <div
                    className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-semibold"
                    style={{ whiteSpace: "nowrap" }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
        </div>
    );
};
