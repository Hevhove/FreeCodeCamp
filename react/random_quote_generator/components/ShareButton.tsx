import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

interface ShareButtonProps {
    quote: string | undefined,
    author: string | undefined,
}
export default function ShareButton({ quote = "", author = ""}: ShareButtonProps) {
    const twitterURL = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;

    return (
        <div className="absolute top-0 right-0 m-4 flex space-x-2">
            <a href={twitterURL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full h-12 w-12">
                <FontAwesomeIcon icon={faTwitter} size="lg"/>
            </a>
        </div>
    )
}