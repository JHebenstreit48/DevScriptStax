import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypeCheckedRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/TypeAware/TypeCheckedRules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Type-Checked Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeCheckedRules;
