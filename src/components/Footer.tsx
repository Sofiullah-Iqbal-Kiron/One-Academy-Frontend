import { Divider, Link } from "@nextui-org/react"


const useful_links = [
    { text: 'Academic Programs', link: '#' },
    { text: 'Admission Programs', link: '#' },
    { text: 'Job Solution', link: '#' },
]


export default function Footer() {
    return (
        <section className="px-5 py-10 text-gray-300 bg-gray-950">
            <div className="flex flex-col space-y-2">
                <h3>Useful Links</h3>
                <ul className="flex flex-col items-center">
                    {useful_links.map((item, idx) => <li key={idx} className="hover:text-sky-500 transition-colors duration-75"><a href={item.link}>{item.text}</a></li>)}
                </ul>
            </div>

            <p className="text-sm text-center font-mono py-3">
                One Academy 2024, all rights reserved.
            </p>

            <Divider className="my-4" />

            <h6 className="text-xs text-center">
                developed & maintained by <Link href="#">Sofiullah Iqbal Kiron</Link>
            </h6>
        </section>
    )
}
