import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
