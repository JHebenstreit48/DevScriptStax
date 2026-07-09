import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BreadcrumbsAndPagination = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/BreadcrumbsAndPagination';

  return (
    <>
      <PageLayout>
        <PageTitle title="Breadcrumbs & Pagination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BreadcrumbsAndPagination;
