import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/Customization/CustomRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomRules;
