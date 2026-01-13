import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIPaginationAndFilters = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Performance/APIPaginationAndFilters';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Pagination & Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIPaginationAndFilters;
