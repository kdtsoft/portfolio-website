import { CONTACT } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const infoVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


function Contact() {
  return (
    <div className="border-t border-s-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-white"
        id="contact"
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col lg:flex-row justify-center gap-8 text-center lg:text-left">
        {/* Address */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={infoVariant}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md hover:border-indigo-500/30 hover:shadow-indigo-500/20 transition-all"
        >
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-stone-300">{CONTACT.address}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={infoVariant}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md hover:border-indigo-500/30 hover:shadow-indigo-500/20 transition-all"
        >
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-stone-300">{CONTACT.phoneNo}</p>
        </motion.div>

        {/* Email */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={infoVariant}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md hover:border-indigo-500/30 hover:shadow-indigo-500/20 transition-all"
        >
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-stone-300 hover:text-pink-500 transition"
          >
            {CONTACT.email}
          </a>
        </motion.div>
        </div>
    </div>
  );
}

export default Contact;
