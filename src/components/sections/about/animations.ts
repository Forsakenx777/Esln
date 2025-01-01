import { cn } from '@/lib/utils';

export const FeatureAnimation = {
  getClassName: (inView: boolean) =>
    cn(
      "transform transition-all duration-700 hover:scale-105",
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )
};