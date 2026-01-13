import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DisableAndInline = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Customization/DisableAndInline';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Disable & Inline" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DisableAndInline;
