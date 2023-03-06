import { motion } from "framer-motion";
import type {ReactNode} from 'react';

type LayoutProps = {children?: ReactNode}
const Layout = (props: LayoutProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "tween"
    }}
  >
    {props.children}
  </motion.div>
);
export default Layout;
