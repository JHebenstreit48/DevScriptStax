import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsingTagsAndFilters = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/UsingTagsAndFilters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Using Tags and Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsingTagsAndFilters;
