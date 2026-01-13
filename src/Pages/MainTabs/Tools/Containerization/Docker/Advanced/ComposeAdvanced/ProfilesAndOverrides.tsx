import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilesAndOverrides = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/ComposeAdvanced/ProfilesAndOverrides';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiles & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilesAndOverrides;
