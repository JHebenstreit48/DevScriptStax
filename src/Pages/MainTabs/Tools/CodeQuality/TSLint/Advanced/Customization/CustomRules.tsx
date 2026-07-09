import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Customization/CustomRules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomRules;
