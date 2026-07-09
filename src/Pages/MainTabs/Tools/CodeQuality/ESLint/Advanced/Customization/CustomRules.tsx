import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/Customization/CustomRules';

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
