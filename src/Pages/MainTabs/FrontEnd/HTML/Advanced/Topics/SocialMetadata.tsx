import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SocialMetadata = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/SocialMetadata';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced HTML Topics - Social Metadata" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SocialMetadata;
