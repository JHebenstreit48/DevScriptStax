import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeCheckedRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/TypeAware/TypeCheckedRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Type-Checked Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeCheckedRules;
