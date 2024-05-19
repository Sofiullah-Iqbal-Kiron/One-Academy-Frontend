const useful_links = [
    { text: 'Academic Programs', link: '#' },
    { text: 'Admission Programs', link: '#' },
    { text: 'Job Solution', link: '#' },
]


export default function Footer() {
    return (
        <section className="px-5 py-10 text-gray-300 bg-gray-950">
            <div className="flex flex-col space-y-3">
                <h3>Useful Links</h3>
                <ul className="flex flex-col space-y-1 items-start">
                    {useful_links.map((item, idx) => <li key={idx}><a href={item.link}>{item.text}</a></li>)}
                </ul>
            </div>

            <span className="text-center font-mono text-sm">One Academy 2024, All Rights Reserved.</span>
            <span className="text-center font-mono text-sm">developed & maintained by Sofiullah Iqbal Kiron</span>
        </section>
    )
}
