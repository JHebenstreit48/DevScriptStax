import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BreadcrumbsAndPagination = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Navigation/BreadcrumbsAndPagination';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Breadcrumbs & Pagination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BreadcrumbsAndPagination;
