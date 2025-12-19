import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TableAndPagination = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Data/TableAndPagination';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Table & Pagination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TableAndPagination;
