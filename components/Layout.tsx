import { motion } from "framer-motion";
import type {ReactNode} from 'react';

type LayoutProps = {children?: ReactNode}
const Layout = (props: LayoutProps) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "tween"
    }}
  >
    {props.children}
  </motion.div>
);
export default Layout;