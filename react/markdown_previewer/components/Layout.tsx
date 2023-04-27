import Head from 'next/head'

interface LayoutProps {
    children: React.ReactNode,
}

export default function Layout({ children } : LayoutProps) {
    return (
        <div>
            <Head>
                <title>Markdown Preview Generator</title>
            </Head>
            <main >
                {children}
            </main>

        </div>
    )
}