import '@/SCSS/PageStyles/PageTitle.scss';

const PageTitle = ({ title }: { title: string }) => {
  if (!title) return null;
  return (
    <div className="pageTitleWrap">
      <h1 className="pageTitle">{title}</h1>
      <div className="pageTitleRule" aria-hidden="true" />
    </div>
  );
};

export default PageTitle;