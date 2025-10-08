import { ChevronRight } from '../../assets/icons';
export const Breadcrumb = ({ items }) => (
  <nav className="flex" aria-label="Breadcrumb"><ol className="inline-flex items-center space-x-1 md:space-x-2">{items.map((item, index) => (<li key={index} className="inline-flex items-center">{index > 0 && (<ChevronRight className="h-4 w-4 text-gray-400 mx-1" />)}<a href={item.href} className={`text-sm font-medium ${index === items.length - 1 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>{item.label}</a></li>))}</ol></nav>
);
