import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIPaginationAndFilters = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Performance/APIPaginationAndFilters';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Pagination & Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIPaginationAndFilters;
