import { ReactNode, TableHTMLAttributes } from 'react';

interface TableWrapperProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

const TableWrapper = ({ children, ...props }: TableWrapperProps) => (
  <div className="tableWrapper">
    <table className="notesTable" {...props}>
      {children}
    </table>
  </div>
);

export default TableWrapper;
