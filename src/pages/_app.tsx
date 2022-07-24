import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "../components/layouts/main-layout";
import {
  AnimatePresence,
  LazyMotion,
  motion,
  domAnimation,
} from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </LazyMotion>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
