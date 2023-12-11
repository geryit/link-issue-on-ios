import Link from "next/link";

export default async function Locations() {
    const locations = await fetch(`https://cloudflare.carbonhealth.com/webdata`, {
        next: {
            revalidate: 60 * 60,
        },
    }).then(r => r.json()).then(r => r.locations);


    return (
        <>
            <h1>Locations</h1>
            <Link
                href="/en/"
            >Home ->
            </Link>

            <div>
                {
                    locations.map(location => (
                        <div key={location.id}
                        ><Link
                            href={`/en/locations/${location.slug}`}
                        >{location.name}
                        </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
