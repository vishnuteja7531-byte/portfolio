import { motion } from 'framer-motion';

export function Soul() {
    return (
        <section
            id="soul"
            className="w-full h-[100vh] h-[100svh] relative overflow-hidden bg-black"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full"
            >
                <img
                    src="/images/soul.jpg"
                    alt="Soul"
                    className="w-full h-full object-cover object-center block"
                    loading="eager"
                />
            </motion.div>
        </section>
    );
}
