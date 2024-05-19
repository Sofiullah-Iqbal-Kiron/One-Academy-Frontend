// style={{ backgroundImage: `url(${cover_1})` }}
export default function Section({ children }: any) {
    return (
        <section className="min-h-dvh min-w-dvw flex flex-col justify-center items-center relative overflow-hidden">
            {children}
        </section>
    )
}
