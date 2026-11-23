const Footer = () => {
    return (
        <div className="text-grape text-center py-7">
            <p className='font-bold pb-2'>Crafted with ❤️ by Rohith Kumar Mamindla</p>
            <div className="flex justify-center gap-6">
                <a
                href="https://www.linkedin.com/in/rohith12kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70">LinkedIn</a>
                <a
                href="https://github.com/rohith12kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70">GitHub</a>
                <a
                href="https://rohithkumarmamindla.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70">Portfolio</a>
            </div>
        </div>
    )
}

export default Footer;
