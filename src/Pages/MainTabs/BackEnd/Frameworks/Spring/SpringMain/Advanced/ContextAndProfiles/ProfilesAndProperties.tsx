import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProfilesAndProperties = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ProfilesAndProperties';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiles & Properties" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilesAndProperties;
