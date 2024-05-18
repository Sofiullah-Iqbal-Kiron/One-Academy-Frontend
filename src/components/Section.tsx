export default function Section({ children }: any) {
    return (
        <section className="bg-green-200 min-h-dvh min-w-dvw flex flex-col justify-center items-center">
            {children}
        </section>
    )
}
