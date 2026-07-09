import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RuleSetsAndExtends = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Customization/RuleSetsAndExtends';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rule Sets & Extends" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RuleSetsAndExtends;
