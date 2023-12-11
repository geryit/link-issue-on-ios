import Link from "next/link";

export default async function Location({params: {slug}}) {
    const locations = await fetch(`https://cloudflare.carbonhealth.com/webdata`, {
        next: {
            revalidate: 60 * 60,
        },
    }).then(r => r.json()).then(r => r.locations);

    const location = locations.find(l => l.slug === slug);

    return (
        <>
            <h1>{location.name}</h1>
            <Link
                href="/en/locations"
            > Locations ->
            </Link>

        </>
    )
}
