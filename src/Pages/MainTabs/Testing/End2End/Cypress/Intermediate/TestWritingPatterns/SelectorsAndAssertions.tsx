import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SelectorsAndAssertions = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/TestWritingPatterns/SelectorsAndAssertions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Selectors & Assertions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SelectorsAndAssertions;
